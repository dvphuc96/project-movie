import React, { Fragment, useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue } from "antd/es/table/interface";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Movie } from "types";
import { quanLyPhimService } from "services";
import qs from "qs";
import { NavLink } from "react-router-dom";
import { Button } from "components";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { PATH } from "constant";
import { handleError } from "utils";
import { toast } from "react-toastify";

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const columns: ColumnsType = [
  {
    title: "Mã Phim",
    dataIndex: "maPhim",
    sorter: (a: Movie, b: Movie) => a.maPhim - b.maPhim,
    sortDirections: ["descend", "ascend"],
    width: "10%",
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    render: (_, film: Movie) => {
      // _ = text
      return (
        <Fragment>
          <img
            src={film?.hinhAnh}
            alt={film?.tenPhim}
            width={50}
            height={50}
            onError={(e) => {
              e.target.onError = null;
            }}
          />
        </Fragment>
      );
    },
    width: "15%",
  },
  {
    title: "Tên Phim",
    dataIndex: "tenPhim",
    sorter: (a: Movie, b: Movie) => {
      const tenPhim1 = a.tenPhim.toLowerCase().trim();
      const tenPhim2 = b.tenPhim.toLowerCase().trim();
      if (tenPhim1 > tenPhim2) {
        return 1;
      }
      return -1;
    },
    sortDirections: ["descend", "ascend"],
    width: "30%",
  },
  {
    title: "Mô tả",
    dataIndex: "moTa",
    render: (_, film: Movie) => (
      <Fragment>
        {film.moTa.length > 50 ? film.moTa.substr(0, 50) + "..." : film.moTa}
      </Fragment>
    ),
    width: "30%",
  },
  {
    title: "Hành động",
    dataIndex: "hanhDong",
    render: (_, film: Movie) => (
      <Fragment>
        <NavLink to={PATH.updateFilm.replace(":id", `${film.maPhim}`)}>
          <Button className="!border-0 !bg-transparent !shadow-none !rounded-none">
            <EditOutlined className="text-[22px]" />
          </Button>
        </NavLink>
        <Button
          className="!border-0 !bg-transparent !shadow-none !rounded-none"
          onClick={() => handleDeleteFilm(film)}
        >
          <DeleteOutlined className="text-[22px]" />
        </Button>
      </Fragment>
    ),
    width: "15%",
  },
];
const queryClient = new QueryClient();
const handleDeleteFilm = async (film: Movie) => {
  const OK = window.confirm("Bạn có chắc muốn xóa phim " + film.tenPhim + "?");
  if (!OK) return;
  try {
    await quanLyPhimService.deleteMovie(film.maPhim);
    toast.success("Xoá phim thành công!");
    queryClient.resetQueries({ 
      queryKey: ["quanLyPhim/LayDanhSachPhimPhanTrang"], 
      exact: true 
    })
    queryClient.invalidateQueries({
      queryKey: ["quanLyPhim/LayDanhSachPhimPhanTrang"],
      stale: true,
      refetchType: 'all',
    });
  } catch (error) {
    handleError(error);
  }
};
const getRandomuserParams = (params: TableParams) => ({
  maNhom: "GP09",
  soTrang: params.pagination?.current,
  soPhanTuTrenTrang: params.pagination?.pageSize,
});

export const FilmListTemplate: React.FC = () => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const handleTableChange = (
    pagination: TablePaginationConfig
    // filters: Record<string, FilterValue>
  ) => {
    setTableParams({
      pagination,
    });
  };
  const { isLoading, data } = useQuery({
    queryKey: ["quanLyPhim/LayDanhSachPhimPhanTrang", tableParams],
    queryFn: () => {
      return quanLyPhimService.getMovieListPagination(
        qs.stringify(getRandomuserParams(tableParams))
      );
    },
    // staleTime: 10000,
  });
  return (
    <Table
      columns={columns}
      rowKey={"maPhim"}
      dataSource={data?.data?.content?.items}
      pagination={{
        current: tableParams.pagination.current,
        pageSize: tableParams.pagination.pageSize,
        total: data?.data?.content?.totalCount,
      }}
      loading={isLoading}
      onChange={handleTableChange}
    />
  );
};
