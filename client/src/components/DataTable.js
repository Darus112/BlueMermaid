import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import Bounce from "react-reveal/Bounce";

export default function DataTable({ columns, data, title, actions }) {
  const defaultMaterialTheme = createTheme();

  return (
    <Bounce>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={data}
          title={title}
          actions={actions}
        />
      </ThemeProvider>
    </Bounce>
  );
}
