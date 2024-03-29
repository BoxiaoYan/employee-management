import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Typography } from "antd";

import { reviewTableColumns } from "./dataFormat";
import { fetchEmployeeByStatus } from "../../services/hr";

import SearchBar from "../../components/SearchBar";
import styles from "./style.module.css";

export default function ReviewTable({ status, search, setSearch }) {
  const { Title } = Typography;
  const [employees, setEmployees] = useState([]);
  const [displayEmployees, setDisplayEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Load the search result from localStorage
    const storedSearch = localStorage.getItem("hiringManagementSearch");
    if (storedSearch) {
      setSearch(storedSearch);
    }

    // Fetch empoyees
    fetchEmployeeByStatus(status, setEmployees, setDisplayEmployees, navigate);
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
      <Title className={styles.title}>
        Onboarding Application Review: {status}
      </Title>
      <SearchBar
        searchId="hiringManagementSearch"
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