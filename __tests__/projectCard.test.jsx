import { describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/projects/ProjectCard';

 
describe("ProjectCard", () => {
  it("Should render no projects when the array is empty", () => {
    render(<ProjectCard post={[]} />);

    expect(screen.getByText(/no projects/i)).toBeInTheDocument();
  })
})