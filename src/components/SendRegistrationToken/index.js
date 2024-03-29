// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Input, Button, message } from "antd";

// import { sendRegistrationLink } from "../../services/hr";
// import styles from "./style.module.css";

// export default function SendRegistrationToken({ refresh, setRefresh }) {
//   const rootLink = "http://localhost:8081";

//   // Full name input variables
//   const [fullName, setFullName] = useState("");
//   const [fullNameStatus, setFullNameStatus] = useState("");
//   const [fullNameError, setFullNameError] = useState("");

//   // Email input variables
//   const [email, setEmail] = useState("");
//   const [emailStatus, setEmailStatus] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const navigate = useNavigate();

//   const reFetch = () => setRefresh(!refresh);

//   const handleSendRegLink = () => {
//     if (fullName && email) {
//       const data = { rootLink, email, fullName };
//       sendRegistrationLink(data, message, navigate, reFetch);
//       setFullName("");
//       setEmail("");
//     } else {
//       message.error("Name or email is empty");
//     }
//   };

//   const handleFullNameChange = (e) => {
//     const value = e.target.value;
//     setFullName(value);
//     setFullNameStatus(value.trim() === "" ? "error" : "");
//     setFullNameError(value.trim() === "" ? "Name cannot be empty" : "");
//   };

//   const handleEmailChange = (e) => {
//     const value = e.target.value.replace(/\s/g, "");
//     setEmail(value);
//     setEmailStatus(value.trim() === "" ? "error" : "");
//     setEmailError(value.trim() === "" ? "Email cannot be empty" : "");
//   };

//   return (
//     <div className={styles.page}>
//       <div className={styles.title}>Send Registration Token</div>
//       <div className={styles.inputContainer}>
//         <div className={styles.inputText}>
//           <div style={{ marginBottom: 10 }}>Employee Full Name</div>
//           <Input
//             value={fullName}
//             status={fullNameStatus}
//             placeholder={fullNameError}
//             onChange={handleFullNameChange}
//           />
//         </div>
//         <div className={styles.inputText}>
//           <div style={{ marginBottom: 10 }}>Employee Email</div>
//           <Input
//             value={email}
//             status={emailStatus}
//             placeholder={emailError}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <br />
//         <div className={styles.button}>
//           <div style={{ marginBottom: 10 }}>
//             <br />
//           </div>
//           <Button
//             type="primary"
//             size="medium"
//             block
//             onClick={handleSendRegLink}
//           >
//             Send
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography, message } from "antd";

import { sendRegistrationLink } from "../../services/hr";
import styles from "./style.module.css";

export default function SendRegistrationToken({ refresh, setRefresh }) {
  const rootLink = "http://localhost:8081";
  const { Title } = Typography;

  // Full name input variables
  const [fullName, setFullName] = useState("");
  const [fullNameStatus, setFullNameStatus] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  // Email input variables
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const reFetch = () => setRefresh(!refresh);

  const handleSendRegLink = () => {
    if (fullName && email) {
      const data = { rootLink, email, fullName };
      sendRegistrationLink(data, message, navigate, reFetch);
      setFullName("");
      setEmail("");
    } else {
      message.error("Name or email is empty");
    }
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    setFullNameStatus(value.trim() === "" ? "error" : "");
    setFullNameError(value.trim() === "" ? "Name cannot be empty" : "");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.replace(/\s/g, "");
    setEmail(value);
    setEmailStatus(value.trim() === "" ? "error" : "");
    setEmailError(value.trim() === "" ? "Email cannot be empty" : "");
  };

  return (
    <div className={styles.page}>
      <Title className={styles.title}>Send Registration Token</Title>
      <div className={styles.inputContainer}>
        <div className={styles.inputText}>
          <div style={{ marginBottom: 10 }}>Employee Full Name</div>
          <Input
            value={fullName}
            status={fullNameStatus}
            placeholder={fullNameError}
            onChange={handleFullNameChange}
          />
        </div>
        <div className={styles.inputText}>
          <div style={{ marginBottom: 10 }}>Employee Email</div>
          <Input
            value={email}
            status={emailStatus}
            placeholder={emailError}
            onChange={handleEmailChange}
          />
        </div>
        <br />
        <div className={styles.button}>
          <div style={{ marginBottom: 10 }}>
            <br />
          </div>
          <Button
            type="primary"
            size="medium"
            block
            onClick={handleSendRegLink}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}