import React, { useEffect, useState } from "react";
import { List, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { collectValuesWithFormNames } from "../HelperMethod";
import { P } from "@angular/cdk/keycodes";
import { list } from "firebase/storage";
const FormListing = () => {
  const formData = useSelector((state) => state.data);
  const [formsList, setFormsList] = useState([]);

  useEffect(() => {
    if (formData) {
      const list = collectValuesWithFormNames(formData);
      setFormsList(list);
    }
  }, [formData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  // Calculate the data to display on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = formsList?.slice(startIndex, endIndex);

  console.log("formData:", formData);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <div>
      <List
        itemLayout="vertical"
        dataSource={currentData}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              description={
                <ul>
                  {Object.entries(item).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              }
            />
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={formsList?.length}
        onChange={handlePageChange}
        showSizeChanger
      />
    </div>
  );
};

export default FormListing;
