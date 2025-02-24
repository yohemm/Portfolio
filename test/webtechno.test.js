import { render, screen } from "@testing-library/react";
// import renderer from 'react-test-renderer';
import { describe, it, expect } from "vitest";
import { WebTechno } from "../app/components/WebTechno"

describe('<WebTechno>', ()=>{
    it('should render correctly', ()=> {
        const {container} = render(<WebTechno back={["NodeJs", "Express", "PostGreSQL"]} front={[ "CSS", "JavaScript" ]}/>)
        expect(container).toMatchInlineSnapshot()
    })
})