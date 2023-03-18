import React from "react";
import SideBox from "./../Generic/SideBox";
import {Input} from 'antd'
import "./../Generic/credForm.css";
import { Link } from "react-router-dom";
import { useState} from "react";
import { useResetPasswordMutation } from "../../services/nodeAPI";
import { useSnackbar } from "notistack";
import LoadingButton from "@mui/lab/LoadingButton";
import { Form } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = (props) => {
  const navigate = useNavigate();

  const getResourcesArray = (data) => {
    let data2 = [];
    data.forEach((el) => {
      if (!data2.find((e) => e === el.resourceId)) {
        data2.push(el.resourceId);
      }
    });

    return data2;
  };

  const { token } = useParams();
  const [passwordResetEmail] = useResetPasswordMutation();
  const [resetPasswordFormData, setResetPasswordFormData] = useState("");

  const head = "Make a smart recruitment solution";

  const subHead =
    "Meerkat provide smarter way of recruitment, in few easy steps you  can find best talent for your company";

  const { enqueueSnackbar } = useSnackbar();

  const [creds, setCreds] = useState({
    password: "",
    confirm_password: "",
    token: token,
  });
  const [loading, setLoading] = useState(false);

  const updateFormDetails = (key, value) => {
    setCreds({ ...creds, [key]: value });
  };

  //******** SUBMIT Reset Password FORM
  const handleSubmitResetPasswordForm = async () => {
    if (
      creds.password === undefined &&
      creds.password === null &&
      creds.password === "" &&
      creds.password === " "
    ) {
      enqueueSnackbar("Password is empty!", { variant: "error" });
    } else if (creds.password !== creds.confirm_password) {
      enqueueSnackbar("Password Mismatched!", { variant: "error" });
    } else {
      setLoading(true);
      passwordResetEmail(creds).then((response) => {
        if (response.data.success === false) {
          enqueueSnackbar(response.data.message, { variant: "error" });
        } else {
          enqueueSnackbar("Password Updated!", { variant: "success" });
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      });
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="hidden md:block md:w-6/12">
        <SideBox
          image="illustrations2.png"
          heading={head}
          subHeading={subHead}
          imageClass="w-9/12"
        />
      </div>

      <div className="w-full md:w-6/12 flex justify-center">
        <div className="w-full lg:w-8/12 2xl:w-8/12">
          <div className="px-3 mt-20">
            <div className="form_top_content">
              <div className="justify-center">
                <h1 className="text-3xl font-medium text-center">
                  Password Reset
                </h1>
                <p className="text-center">Please Enter your new Password</p>
              </div>

              <div className="mt-20">
                <Form>
                  <div className="w-100">
                    <Input
                      name="password"
                      label="New Password"
                      onChange={(event) =>
                        updateFormDetails(event.target.name, event.target.value)
                      }
                      margin="mx-auto"
                      placeholder="Enter new password"
                      type="password"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    />
                  </div>

                  <div className="w-100 mt-4">
                    <Input
                      name="confirm_password"
                      label="Confirm Password"
                      onChange={(event) =>
                        updateFormDetails(event.target.name, event.target.value)
                      }
                      margin="mx-auto"
                      placeholder="Confirm your new password"
                      type="password"
                      required={true}
                      rules={[{ required: true }]}
                    />
                  </div>

                  <div>
                    <LoadingButton
                      size="small"
                      loading={loading}
                      loadingPosition="end"
                      variant="contained"
                      className="btn create_account_btn w-100 mt-4"
                      type="button"
                      onClick={() => handleSubmitResetPasswordForm()}
                    >
                      Reset Password
                    </LoadingButton>
                  </div>
                </Form>
              </div>
            </div>
          </div>

          <div className="move_signup text-center mt-5">
            <p>
              Don't have an account?
              <Link to="/signup" className="ms-2 inline_link">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
