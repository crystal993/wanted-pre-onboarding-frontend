import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elements/GlobalButton";
import Input from "../elements/GlobalInput";
import Label from "../elements/GlobalLabel";
import { emailCheck, passwordCheck } from "../../shared/regex";

const SignIn = ({ setIsToggled }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [emailMsg, setEmailMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [emailMsgColor, setEmailMsgColor] = useState("");
  const [pwMsgColor, setPwMsgColor] = useState("");

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      if (!emailCheck(value)) {
        setEmailMsg("@를 포함해주세요.");
        setEmailMsgColor("#FF1F2F");
      } else {
        setEmailMsg("올바른 형식입니다.");
        setEmailMsgColor("#5D5FEF");
      }
    }

    if (name === "password") {
      if (passwordCheck(value)) {
        setPwMsg("올바른 형식입니다.");
        setPwMsgColor("#5D5FEF");
      } else {
        setPwMsg("8자리 이상 입력해주세요.");
        setPwMsgColor("#FF1F2F");
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!emailCheck(formData.email) || !passwordCheck(formData.password)) {
      alert("아이디나 비밀번호 형식이 틀렸습니다.");
    } else {
      setIsToggled(false);
    }
  };
  return (
    <Wrapper onSubmit={onSubmitHandler}>
      <Title>로그인</Title>
      <Form>
        <InputWrapper>
          <Label
            label={"이메일"}
            labelFontSize={"1rem"}
            width={"100%"}
            htmlFor={"email"}
          />
          <Input
            type={"text"}
            name={"email"}
            value={formData.email}
            onChange={onChangeHandler}
            required={"required"}
            placeholder={"이메일을 입력해주세요."}
            width={"100%"}
            fontSize={"1rem"}
          />
          <Label label={emailMsg} color={emailMsgColor}></Label>
        </InputWrapper>
        <InputWrapper>
          <Label
            label={"패스워드"}
            labelFontSize={"1rem"}
            width={"100%"}
            htmlFor={"password"}
          />
          <Input
            type={"password"}
            name={"password"}
            value={formData.password}
            onChange={onChangeHandler}
            required={"required"}
            placeholder={"8자리 이상 입력해주세요."}
            width={"100%"}
            fontSize={"1rem"}
          />
          <Label label={pwMsg} color={pwMsgColor}></Label>
        </InputWrapper>
        <ButtonWrapper>
          <Button
            width={"100%"}
            height={"1.5rem"}
            content={"로그인"}
            fontSize={"0.8rem"}
            borderRadius={"0.3rem"}
            padding={"1.1rem"}
          />
        </ButtonWrapper>
      </Form>
      <Label
        label={"회원가입"}
        onClick={() => setIsToggled(true)}
        textDecoration={"underline"}
        labelFontSize={"0.8rem"}
        cursor={"pointer"}
      ></Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 35%;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5rem 0rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0rem;
`;

const Form = styled.form`
  width: 100%;
  padding: 2rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 90%;
  margin: 1rem 0rem;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  margin-top: 1rem;
`;

export default SignIn;
