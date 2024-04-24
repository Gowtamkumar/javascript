import { Layout } from "antd";
const { Footer } = Layout;

function FooterOption() {
  return (
    <Footer
      style={{
        textAlign: "center",
        height: 30,
        alignItems: "center",
        padding: 0,
      }}
    >
      ©{new Date().getFullYear()} Developed by Gowtam Kumar
    </Footer>
  );
}

export default FooterOption;
