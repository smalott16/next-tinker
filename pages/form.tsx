import { useForm, Controller, SubmitHandler } from "react-hook-form";
import useDefaultData from "../hooks/useDefaultData";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

interface FormFields {
  email: string
}

const Form = () => {
  const fetchData = useDefaultData()
  const { control, handleSubmit } = useForm({defaultValues: fetchData()});

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log('submit', data);
  }
  return (
    <section style={{padding: '48px'}}>
      <form
      onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{marginBottom: '24px'}}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email address is required." }}
            render={({ field }) => <TextField {...field} placeholder="email" />}
          />
        </div>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default Form;