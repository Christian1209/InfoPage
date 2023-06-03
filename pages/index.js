import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { InicioLayout } from "../components/layout/InicioLayout";

const Heading = styled.h1`
  color:red;
`;


export default function Home() {
  return (
    <div>
      <Layout>    
        <InicioLayout/>
      </Layout>
    </div>
  )
}
