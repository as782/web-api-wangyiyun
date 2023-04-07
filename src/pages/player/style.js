import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  z-index:9999;
  .content {
    background: url(${require("@/assets/img/wrap-bg.png").default}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`

export const PlayerLeft = styled.div`
  width: 710px;
`

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`