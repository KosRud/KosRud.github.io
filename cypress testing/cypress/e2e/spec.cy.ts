function findSideNavTitle() {
	return cy.get('h2').contains('For students/');
}

function findTocTitle() {
	return cy.get('h2').contains('On this page:');
}

describe('SideNav and Toc style parity', () => {
	beforeEach(() => {
		cy.viewport(1300, 800);
		cy.visit('http://localhost:5173/students/html+css/selectors.html');
	});

	it('Titles aligned', () => {
		const sideNavTitle = findSideNavTitle();
		const tocTitle = findTocTitle();

		sideNavTitle.then((sideNavTitleElements) => {
			tocTitle.should((tocTitleElements) => {
				const sideNavTitleTop =
					sideNavTitleElements[0].getBoundingClientRect().top;

				const tocTitleTop =
					tocTitleElements[0].getBoundingClientRect().top;

				expect(sideNavTitleTop).to.equal(tocTitleTop);
				expect(sideNavTitleTop).to.be.ok;
			});
		});

		sideNavTitle.then((elements) => {
			elements[0].innerHTML = '';
		});
	});

	it('Titles have same font size', () => {
		const sideNavTitle = findSideNavTitle();
		const tocTitle = findTocTitle();

		sideNavTitle.then((sideNavTitleElements) => {
			tocTitle.then((tocTitleElements) => {
				cy.window().should((win) => {
					const sideNavTitleSize = win.getComputedStyle(
						sideNavTitleElements[0]
					).fontSize;

					const TocTitleSize = win.getComputedStyle(
						tocTitleElements[0]
					).fontSize;

					expect(sideNavTitleSize).to.equal(TocTitleSize);
					expect(sideNavTitleSize).to.be.ok;
				});
			});
		});
	});
});
