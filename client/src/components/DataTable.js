import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import Fade from "react-reveal/Fade";

export default function DataTable({ columns, data, title, actions }) {
  const defaultMaterialTheme = createTheme();

  return (
    <Fade>
      <div
        className="md:w-full w-[650px] p-12 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
      db:mx-12 bg-gradient-to-tr from-seagull-200 to-seagull-50"
      >
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={columns}
            data={data}
            title={title}
            actions={actions}
          />
        </ThemeProvider>
      </div>
    </Fade>
  );
}
