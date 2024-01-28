import apiCall from "./api";

export const fetchVisaStatus = async (
  setIsOPT,
  setOptRecStatus,
  setEadStatus,
  setI983Status,
  setI20Status,
  setFeedback,
  navigate
) => {
  try {
    const response = await apiCall({
      url: `/api/visa_status`,
      method: "GET",
    });
    if (!response.visaStatus) {
      return setIsOPT(false);
    }
    setOptRecStatus(response.visaStatus.opt_receipt);
    setEadStatus(response.visaStatus.opt_ead);
    setI983Status(response.visaStatus.i983);
    setI20Status(response.visaStatus.i20);
    setFeedback(response.visaStatus.feedback);
  } catch (error) {
    console.log(error.message);
    switch (error.message) {
      case "Authentication failed":
        navigate("/error/not-authorized");
        break;
      case "Token Expired":
        navigate("/error/session-expired");
        break;
      default:
        navigate("/error/server-error");
        break;
    }
  }
};
