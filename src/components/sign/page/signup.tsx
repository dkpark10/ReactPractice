import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link, RouteComponentProps } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../reducers/login';
import { Response } from 'response-type';
import { debounce } from 'lodash';
import axiosInstance from '../../../modules/default_axios';

import Input from '../atoms/input';
import Title from '../atoms/title';
import useInput from '../../custom_hook/useinput';
import CenterWrapper from '../../common/atoms/center_wrapper';

const SignWrapper = styled(CenterWrapper)`
  font-family: 'Roboto', sans-serif;
  background-color: white;
  padding:20px;
  border-radius: 12px;
  width:378px;
  box-shadow: 5px 5px 16px -2px rgb(175, 175, 175);
  text-align: center;

  .failmsg{
    color:red;
    font-size:0.7rem;
  }

  & a{
    text-decoration: none;
  }
`;

interface InputProps {
  id: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export default function SignIn({ history }: RouteComponentProps) {

  const dispatch = useDispatch();
  const duplicateCheck = useMemo(() =>
    debounce(async ({ name, value }) => {

      if (name !== 'id' && name !== 'email') {
        return;
      }

      const regList: { [key: string]: RegExp } = {
        id: /^[A-za-z0-9]{5,15}$/g,  // 영문 대문자 또는 소문자 또는 숫자로 시작 길이는 5 ~ 15
        email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      };

      const invalidMessage = {
        id: [
          '5~15 characters consisting of English letters(a-zA-Z), numbers, or special characters (_).',
          'id already exists.'
        ],
        email: [
          'the email entered is in an invalid format.'
        ]
      }

      if (value && regList[name].exec(value) === null) {
        setValidator(prev => ({
          ...prev,
          [name]: {
            result: false,
            msg: invalidMessage[name][0]
          }
        }))
        return;
      }

      const { data }: AxiosResponse<Response> = await axiosInstance.get(`/api/user?id=${value}`);
      if (value && data.result === true) {
        setValidator(prev => ({
          ...prev,
          id: {
            result: false,
            msg: invalidMessage[name][1]
          }
        }))
        return;
      }

      setValidator(prev => ({
        ...prev,
        [name]: {
          result: true,
          msg: ''
        }
      }))
    }, 350), []
  )

  const [value, changeValue] = useInput<InputProps>({
    id: '',
    email: '',
    password: '',
    repeatPassword: ''
  }, duplicateCheck);

  const [validator, setValidator] = useState({
    id: { result: true, msg: '' },
    email: { result: true, msg: '' },
    password: { result: true },
    repeatPassword: { result: true }
  });

  useEffect(() => {
    const passwordReg = /^[A-Za-z0-9]{6,15}$/;
    if (value.password) {
      setValidator(prev => ({
        ...prev,
        password: {
          result: passwordReg.exec(value.password) === null ? false : true
        }
      }))
    }

    if (value.repeatPassword) {
      setValidator(prev => ({
        ...prev,
        repeatPassword: {
          result: value.password === value.repeatPassword
        }
      }))
    }
  }, [value.password, value.repeatPassword]);


  const submintHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkValidValue = Object.entries(validator).filter(([_, value]) => value.result === false).length > 0;
    if (checkValidValue) {
      alert('The registration form is invalid');
      return;
    }

    const request = async () => {
      try {
        const { data }: AxiosResponse<Response> = await axiosInstance.post('/api/user', {
          id: value.id,
          email: value.email,
          pwd: value.password
        });

        if (data.result === true) {
          history.goBack();
        } else {
          // 회원가입 실패하면 어찌 처리할까?
          throw new Error('sorry member registration failed');
        }
      } catch (e) {
        alert(e.message);
      }
    }

    request();
  }


  return (
    <>
      <SignWrapper>
        <Link to="/">
          <Title>Mine Sweeper</Title>
        </Link>
        <form onSubmit={submintHandler}>
          <Input
            type='text'
            placeholder='id'
            name='id'
            id='id'
            value={value.id}
            onChange={changeValue}
          />
          {validator.id.result === false &&
            value.id &&
            <div className='failmsg'>
              <label htmlFor='id'>
                {validator.id.msg}
              </label>
            </div>
          }
          <Input
            type='text'
            placeholder='email'
            name='email'
            id='email'
            value={value.email}
            onChange={changeValue}
          />
          {validator.email.result === false &&
            value.email &&
            <div className='failmsg'>
              <label htmlFor='email'>
                {validator.email.msg}
              </label>
            </div>
          }
          <Input
            type='password'
            placeholder='password'
            name='password'
            id='password'
            value={value.password}
            onChange={changeValue}
          />
          {validator.password.result === false &&
            <div className='failmsg'>
              <label htmlFor='password'>
                The password must be at least 6 to 15 digits.
              </label>
            </div>
          }
          <Input
            type='password'
            placeholder='repeat password'
            name='repeatPassword'
            id='repeat-password'
            value={value.repeatPassword}
            onChange={changeValue}
          />
          {validator.repeatPassword.result === false &&
            <div className='failmsg'>
              <label htmlFor='repeat-password'>
                The password doesn't match.
              </label>
            </div>
          }
          <Input
            type='submit'
            name='signup'
            value='Sign Up'
          />
        </form>
      </SignWrapper>
    </>
  )
}