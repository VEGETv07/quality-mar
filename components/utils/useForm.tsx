import { useState } from "react";

const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback: any) => async (e: any) => {
    e.preventDefault();
    await callback();
  };

  const onSubmit = async () => {
    const response = await fetch("/api/MessageAction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(response);
    if (response.ok) {
      setStatus("Message envoyé avec succès!");
    } else {
      const errorData = await response.json();
      console.log("Error response:", errorData);
      setStatus(`Failed to send message: ${errorData.error}`);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    onSubmit,
    status,
    setStatus,
  };
};

export default useForm;
