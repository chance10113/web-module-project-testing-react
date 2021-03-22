import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Display from "../Display";
// import { fetchShow } from ".../api/fetchShow"
const steve = jest.mock(".../api/fetchShow")

const testShow = {
  name: "testShow",
  summary: "This is a test Summary for testShow",
  seasons: [
    {
      id: 1,
      name: "testSeason1",
      episodes: [],
    },
    {
      id: 2,
      name: "testSeason2",
      episodes: [],
    },
    {
      id: 3,
      name: "testSeason3",
      episodes: [],
    },
  ],
};

test("Renders Display without errors", () => {
  render(<Display />);
});

test("fetchShow button works", () => {
    render(<Display />);
    steve.mockResolvedValueOnce({
        name: "testShow",
        summary: "This is a test Summary for testShow",
        seasons: [
          {
            id: 1,
            name: "testSeason1",
            episodes: [],
          },
          {
            id: 2,
            name: "testSeason2",
            episodes: [],
          },
          {
            id: 3,
            name: "testSeason3",
            episodes: [],
          },
        ],
      })
    // Act: Define button
    const button = screen.getByRole("button")
    userEvent.click(button)
    // Assert: Show element will display
    const show = screen.getByText(/testShow/i)
    expect(show).toBeInTheDocument()
})

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display.
    // Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered
    // is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code.
    // Test that when the fetch button is pressed, this function is called.
