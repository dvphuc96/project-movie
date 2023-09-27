import { Footer, Header, ScrollToTop } from "components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FloatButton } from 'antd';

export const MainLayout = () => {
  return (
    <main>
      <Header />
      <MainWrapper id="main-content">
        <Outlet />
      </MainWrapper>
      <FloatButton.BackTop
      icon= {<i className="fa-solid fa-arrow-turn-up"></i>}
      type="primary"
      />
      <Footer />
      <ScrollToTop/>
    </main>
  );
};

const MainWrapper = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
`