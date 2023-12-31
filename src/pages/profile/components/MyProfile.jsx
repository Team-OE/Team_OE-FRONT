import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImageContiner = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const MyImage = styled.img`
  border-radius: 100%;
  overflow: hidden;
  width: 120px;
  height: 120px;
`;

const ModifyButton = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 4px;
`;

const UserInfo = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #bdbdbd;
  margin-bottom: 4px;
`;

const Biography = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 24px;
`;

export default function MyProfile() {
  return (
    <>
      <ImageContiner>
        <MyImage src="/mock/icon_profile.svg" alt="프로필 사진" />
        <ModifyButton to="/profile/modify">
          <img src="/icons/btn_modify.svg" alt="프로필 수정" />
        </ModifyButton>
      </ImageContiner>

      <UserName>최강민</UserName>
      <UserInfo>
        <span>서울 &middot; </span> <span>1999.08.26</span>
      </UserInfo>
      <Biography>안녕하세요</Biography>
    </>
  );
}
