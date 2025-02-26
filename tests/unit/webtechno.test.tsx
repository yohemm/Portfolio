import React from 'react';
import { render, screen } from "@testing-library/react";
import { WebTechno } from "~/components/WebTechno"

describe('<WebTechno>', ()=>{
    it('should render error paragraph', ()=> {
        const fullEmpty = render(<WebTechno back={[]} front={[]}/>).container;
        const frontEmpty = render(<WebTechno back={["NodeJs", "Express", "PostGreSQL"]} front={[]}/>).container;
        const backEmpty = render(<WebTechno back={[]} front={[ "CSS", "JavaScript" ]}/>).container;

        expect(fullEmpty).toMatchInlineSnapshot(`
          <div>
            <p>
              Error front nb agrs
            </p>
          </div>
        `);
        expect(frontEmpty).toMatchInlineSnapshot(`
          <div>
            <p>
              Error front nb agrs
            </p>
          </div>
        `);
        expect(backEmpty).toMatchInlineSnapshot(`
          <div>
            <p>
              Error back nb agrs
            </p>
          </div>
        `);
    })
    it('should render correctly', ()=> {
        const {container} = render(<WebTechno back={["NodeJs", "Express", "PostGreSQL"]} front={[ "CSS", "JavaScript" ]}/>);
        // const mainDiv = screen.getByText('PostGreSQL');
        // expect(mainDiv).toBeInTheDocument();
        expect(container).toMatchInlineSnapshot(`
          <div>
            <div
              class="web-techno-main"
              id="web-techno-main"
            >
              <div
                id="web-techno-backend"
              >
                <h3>
                  Back-end
                </h3>
                <div
                  class="web-techno-icons-container"
                >
                  <div
                    class="technos-container pos-0"
                  >
                    <i
                      class=""
                    />
                    <p>
                      NodeJs
                    </p>
                  </div>
                  <div
                    class="technos-container pos-1"
                  >
                    <i
                      class="devicon-express-original colored"
                    />
                    <p>
                      Express
                    </p>
                  </div>
                  <span
                    class="vert"
                  />
                  <div
                    class="technos-container pos-2"
                  >
                    <i
                      class="devicon-postgresql-plain colored"
                    />
                    <p>
                      PostGreSQL
                    </p>
                  </div>
                  <span
                    class="horiz"
                  />
                </div>
              </div>
              <span />
              <div
                id="web-techno-frontend"
              >
                <h3>
                  Front-end
                </h3>
                <div
                  class="web-techno-icons-container"
                >
                  <span
                    class="anim"
                  />
                  <div
                    class="technos-container pos-0"
                  >
                    <i
                      class="devicon-css3-plain colored"
                    />
                    <p>
                      CSS
                    </p>
                  </div>
                  <div
                    class="technos-container pos-1"
                  >
                    <i
                      class="devicon-javascript-plain colored"
                    />
                    <p>
                      JavaScript
                    </p>
                  </div>
                  <span
                    class="vert"
                  />
                </div>
              </div>
            </div>
          </div>
        `);
    })
})