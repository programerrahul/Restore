import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function About(){
    return (
        <>
        {/* <Typography variant="h1">
            About Page
        </Typography>
         */}

        <Container>
            <Typography variant='h2' gutterBottom>
                Error for testing purposes.
            </Typography>
            <ButtonGroup fullWidth>
            <Button variant='contained' onClick={()=>agent.TestErrors.get400Error()}>Test 400 Error</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get401Error()}>Test 401 Error</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get404Error()}>Test 404 Error</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get500Error()}>Test 500 Error</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.getValidationError()}>Test Validation Error</Button>
            </ButtonGroup>
        </Container>

        </>

    );
}