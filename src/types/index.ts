import { GridColDef } from "@mui/x-data-grid";
import { IconBaseProps } from "react-icons";

 export type ChartDataItem = {
    name: string;
    users: number;
    revenue:number;
    products:number;
    ratio:number;
  };
   export type BarChartItem={
    name: string;
    visit: number;
    profit: number;
   };

    export type chartProps={
    color:string,
    icon:React.FunctionComponentElement<IconBaseProps>,
    title:string,
    dataKey:string,
    number:number | string,
    percentage:number,
    chartData:ChartDataItem[],
    };


    export type barChartProps={
      color:string,
      title:string,
      dataKey:string,
      chartData:BarChartItem[],
      };

      export type areaChartProps={
        name: string,
        books: number |string,
        clothes: number |string,
        electronic: number |string,
      };
      export type pieChartItem={
        name:string,
        value:number,
        color:string,
      }

      export type columnsProps ={
        columns:GridColDef[],
        rows?:object[],
        slug:string,
      }
      export type userDetailsProps = {
        id: number;
        img?: string;
        title: string;
        info: object;
        chart?: {
          dataKeys: { name: string; color: string }[];
          data: object[];
        };
        activities?: { time: string; text: string }[];
      };
     