
import Page from "../app/contact/page"



describe('Contact', () => {
    it('should render with correct text and initial state', () => {
        render(<Page/>);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Contact me!");

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})