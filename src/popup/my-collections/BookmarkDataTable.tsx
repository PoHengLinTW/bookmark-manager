import React, { useMemo } from "react";
import { Column, useTable, useSortBy } from "react-table";
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

type BookmarkRecord = {
  title: string;
  url: string;
  createDate: string;
};

const dummy: BookmarkRecord[] = [
  {
    title: "title1",
    url: "url1",
    createDate: Date.now().toString(),
  },
  {
    title: "title2",
    url: "url2",
    createDate: Date.now().toString(),
  },
  {
    title: "title3",
    url: "url3",
    createDate: Date.now().toString(),
  },
];

export const BookmarkDataTable = () => {
  const columns: Column<BookmarkRecord>[] = useMemo(
    () => [
      {
        Header: "title",
        accessor: "title",
      },
      {
        Header: "url",
        accessor: "url",
      },
      {
        Header: "date added",
        accessor: "createDate",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: dummy }, useSortBy);
  return (
    <Table {...getTableProps()} colorScheme="green">
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default BookmarkDataTable;
