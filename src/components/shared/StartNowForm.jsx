import React from "react";
import styled from "styled-components";
import {
  Input,
  Label,
  Button,
  TextArea,
  Title,
  Select
} from "../../theme/index";
import { Formik } from "formik";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  width: 475px;
  height: 775px;
  margin: 4.5em auto;
  z-index: 10000000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    align-items: center;
  }
`;

// const StyledInputButton = styled(Input)`
//   background: #d21f04;
//   width: ${props => (props.small ? "135px" : "165px")};
//   height: 45px;
//   border: 1px solid transparent;
//   color: #fff;
//   &:hover {
//     background-color: #f32405;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//   }
// `;

export default function StartNowForm() {
  return (
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <Title>Start now</Title>
      </div>
      <Formik
        initialValues={{
          businessName: "",
          businessWebsite: "",
          firstname: "",
          email: "",
          phone: "",
          budget: "",
          objective: ""
        }}
        onSubmit={values => {
          function formv3() {
            let xhr = new XMLHttpRequest();
            let url =
              "https://api.hsforms.com/submissions/v3/integration/submit/5644251/9cdcc4d4-244b-4dcf-bc3c-501fc78e9aea";
            let data = {
              fields: [
                {
                  name: "email",
                  value: values.email
                },
                {
                  name: "firstname",
                  value: values.firstname
                }
              ],
              context: {
                pageUri: "www.creative114.com/#/",
                pageName: "Contact page"
              }
            };
            const final_data = JSON.stringify(data);
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("success");
              }
            };
            xhr.send(final_data);
          }
          formv3();
        }}
        render={({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="businessName" login>
              Business name *
              <Input
                value={values.businessName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="businessName"
              />
            </Label>
            <Label htmlFor="businessWebsite" login>
              Business website *
              <Input
                value={values.businessWebsite}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="businessWebsite"
              />
            </Label>
            <Label htmlFor="firstname" login>
              Contact name *
              <Input
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="name"
                name="firstname"
              />
            </Label>
            <Label htmlFor="email" login>
              Email *
              <Input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                name="email"
              />
            </Label>
            <Label htmlFor="phone" login>
              Phone *
              <Input
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type="phone"
                name="phone"
              />
            </Label>

            <Label htmlFor="budget" login>
              Budget *
              <Select
                value={values.budget}
                id="budget"
                name="budget"
                onChange={value => {
                  setFieldValue("budget", value);
                }}
              >
                <option value="first">$1,000-$2,500</option>
                <option value="second">$2,500-$5,000</option>
                <option value="third">$5,000-$7,500</option>
                <option value="forth">$7,500-$10,000</option>
                <option value="fifth">$10,000 +</option>
              </Select>
            </Label>

            {/* <Label htmlFor="budget" login>
            Budget *
            <Input type="text" name="budget" />
          </Label> */}
            <Label htmlFor="objective" login>
              Objective *
              <TextArea
                value={values.objective}
                onChange={handleChange}
                onBlur={handleBlur}
                name="objective"
              />
            </Label>

            <Button primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      />
    </Wrapper>
  );
}
