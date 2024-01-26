import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

import { reviewTableColumns } from "./dataFormat";
import { fetchEmployeeByStatus } from "../../services/employees";

import SearchBar from "../../components/SearchBar";
import styles from "./style.module.css";

export default function ReviewTable({ status, search, setSearch }) {
  // const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [displayEmployees, setDisplayEmployees] = useState([]);

  const navigate = useNavigate();
  const userToken = useSelector((state) => state.user.user.token || null);

  useEffect(() => {
    // Load the search result from localStorage
    const storedSearch = localStorage.getItem("hiringManagementSearch");
    if (storedSearch) {
      setSearch(storedSearch);
    }

    // Fetch empoyees
    fetchEmployeeByStatus(
      status,
      setEmployees,
      setDisplayEmployees,
      navigate,
      userToken
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    // Update displayed employee with search result
    setDisplayEmployees(
      employees.filter((item) =>
        item.fullName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, employees]);

  return (
    <>
      <SearchBar
        storageId="hiringManagementSearch"
        search={search}
        setSearch={setSearch}
      />
      <div className={styles.text}>
        Found {displayEmployees.length} employee(s)
      </div>
      <div className={styles.table}>
        <Table
          pagination={{ pageSize: 10 }}
          columns={reviewTableColumns}
          dataSource={displayEmployees}
        />
      </div>
    </>
  );
}