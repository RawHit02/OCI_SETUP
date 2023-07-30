import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import Box from "@mui/material/Box";
import { MoonLoader } from "react-spinners";

/**
 * Component avialble props
 */
type ContainerProps = {
  toolbarTitle: string;
  children?: React.ReactNode;
};
const Container = (props: ContainerProps) => {
  const [showPage, setShowPage] = React.useState(false);
  React.useEffect(() => {
    setShowPage(true);
  }, []);
  const override = ` display: block; margin: 0 auto;border-color: red;`;
  return (
    <div>
      {!showPage ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <MoonLoader color="#36d7b7" />
        </div>
      ) : (
        <Box sx={{ marginTop: 7, marginLeft: 1, marginRight: 1 }}>
          <Header toolbarTitle={props.toolbarTitle} />
          {props.children}
          <Footer  />
        </Box>
      )}
    </div>
  );
};

/*
class Container extends React.Component
{
    
    constructor(props:ContainerProps){
        super(props)
    }

    render(){
        return (
            <Box sx={{ marginTop:7,marginLeft:1,marginRight:1 }}>
                <Header toolbarTitle={this.props.toolbarTitle} />
                    {this.props.children}
                <Footer />
            </Box>
            
        );
    }
    
}
*/
export default Container;
