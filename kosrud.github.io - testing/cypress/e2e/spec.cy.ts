function findSideNav() {
    return cy.get("h2").contains("My projects/");
}

function findToctitle() {
    return cy.get("h2").contains("On this page:");
}

describe("SideNav title and Toc title are on the same height.", () => {
    it("passes", () => {
        cy.visit("http://localhost:5173/projects/");

        const sideNavTitle = findSideNav();
        const toctitle = findToctitle();

        sideNavTitle.then((sideNavTitleElements) => {
            toctitle.should((tocTitleElements) => {
                const sideNavTitleTop =
                    sideNavTitleElements[0].getBoundingClientRect().top;

                const tocTitleTop =
                    tocTitleElements[0].getBoundingClientRect().top;

                expect(sideNavTitleTop).to.equal(tocTitleTop);
            });
        });
    });
});

describe("SideNav title and Toc title have same font size.", () => {
    it("passes", () => {
        cy.visit("http://localhost:5173/projects/");

        const sideNavTitle = cy.get("h2").contains("My projects/");
        const toctitle = cy.get("h2").contains("On this page:");

        sideNavTitle.then((sideNavTitleElements) => {
            toctitle.then((tocTitleElements) => {
                cy.window().should((win) => {
                    const sideNavTitleSize = win.getComputedStyle(
                        sideNavTitleElements[0]
                    ).fontSize;
                    const TocTitleSize = win.getComputedStyle(
                        tocTitleElements[0]
                    ).fontSize;

                    expect(sideNavTitleSize).to.equal(TocTitleSize);
                });
            });
        });
    });
});
