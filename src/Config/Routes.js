//React
import React, { lazy } from "react";
//Pages
import FormCreation from "../Pages/FormCreator";
import DataInput from "../Pages/DataInput";
import FormListing from "../Pages/FormListing";

// Lazy load components
// const FormCreation = lazy(() => import("../Pages/FormCreator"));
// const DataInput = lazy(() => import("../Pages/DataInput"));
// const FormListing = lazy(() => import("../Pages/FormListing"));

//Constants//
import { PAGE_URLS, PAGE_NAMES } from "../Constants/AppUrls";
//Antd
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const ConfigRoutes = [
  {
    name: PAGE_NAMES.FORM_CREATION,
    path: PAGE_URLS.FORM_CREATION,
    // component: lazy(() => import(<FormCreation />)),
    component: <FormCreation></FormCreation>,
    icon: <HomeOutlined />,
  },
  {
    name: PAGE_NAMES.DATA_INPUT,
    path: PAGE_URLS.DATA_INPUT,
    // component: lazy(() => import(<DataInput />)),
    component: <DataInput></DataInput>,
    icon: <UserOutlined />,
  },
  {
    name: PAGE_NAMES.FORM_LISTING,
    path: PAGE_URLS.FORM_LISTING,
    // component: lazy(() => import(<FormListing />)),
    component: <FormListing></FormListing>,
    icon: <SettingOutlined />,
  },
];

export default ConfigRoutes;
