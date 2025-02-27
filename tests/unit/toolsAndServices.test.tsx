import React from 'react';

import { render } from '@testing-library/react';

import { ToolsAndServices } from '~/components/ToolsAndServices';

describe('<ToolsAndServices>', () => {
  it('should render correctly', () => {
    const toolsAndServices = render(
      <ToolsAndServices services={['Grafana']} tools={['Git']} />
    ).container;
    const tools = render(<ToolsAndServices services={[]} tools={['Git']} />).container;
    const services = render(<ToolsAndServices services={['Grafana']} tools={[]} />).container;

    expect(toolsAndServices).toMatchInlineSnapshot(`
          <div>
            <div
              id="container-subtitle-async tools-and-services-container"
            >
              <div
                class="technos-listing-container"
              >
                <div
                  class="subtitle-container"
                >
                  <h3
                    class="subtitle"
                  >
                     
                    Les outils que j'ai pu utilisé :
                  </h3>
                </div>
                <div
                  class="technos-listing-title"
                >
                  <div
                    class="technos-container "
                  >
                    <i
                      class="devicon-git-plain colored"
                    />
                    <p>
                      Git
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="technos-listing-container"
              >
                <div
                  class="subtitle-container"
                >
                  <h3
                    class="subtitle"
                  >
                     
                    Les services que j'ai pu utilisé :
                  </h3>
                </div>
                <div
                  class="technos-listing-title"
                >
                  <div
                    class="technos-container "
                  >
                    <i
                      class="devicon-grafana-plain colored"
                    />
                    <p>
                      Grafana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
    expect(tools).toMatchInlineSnapshot(`
          <div>
            <div
              id="container-subtitle-async tools-and-services-container"
            >
              <div
                class="technos-listing-container"
              >
                <div
                  class="subtitle-container"
                >
                  <h3
                    class="subtitle"
                  >
                     
                    Les outils que j'ai pu utilisé :
                  </h3>
                </div>
                <div
                  class="technos-listing-title"
                >
                  <div
                    class="technos-container "
                  >
                    <i
                      class="devicon-git-plain colored"
                    />
                    <p>
                      Git
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
    expect(services).toMatchInlineSnapshot(`
          <div>
            <div
              id="container-subtitle-async tools-and-services-container"
            >
              <div
                class="technos-listing-container"
              >
                <div
                  class="subtitle-container"
                >
                  <h3
                    class="subtitle"
                  >
                     
                    Les services que j'ai pu utilisé :
                  </h3>
                </div>
                <div
                  class="technos-listing-title"
                >
                  <div
                    class="technos-container "
                  >
                    <i
                      class="devicon-grafana-plain colored"
                    />
                    <p>
                      Grafana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
  });
});
