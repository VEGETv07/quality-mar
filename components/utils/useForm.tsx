import { useState } from "react";
import { toast } from "react-toastify";

const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback: any) => async (e: any) => {
    e.preventDefault();
    await callback(e);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/MessageAction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(response);
    if (response.ok) {
      toast.success("Message envoyé avec succès!");
      setValues(initialValues); 
    } else {
      const errorData = await response.json();
      console.log("Error response:", errorData);
      toast.error(`Failed to send message: ${errorData.error}`);
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
