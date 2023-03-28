import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App Tests', () => {
  beforeEach(() => {
    render(<App />)
  })

  test("header test", () => {
    const header = screen.getByText("Emoji Search")
    expect(header).toBeInTheDocument()
  })

  test("list test", () => {
    const items = screen.getAllByText("Click to copy emoji")
    expect(items.length).toEqual(20)
  })

  test("filter test", () => {
    const emoji = 100
    const input = screen.getByPlaceholderText("Search...")
    userEvent.type(input, emoji)
    expect(screen.getByText(emoji)).toBeInTheDocument()
  })

  test("copy emoji", () => {
    const copyEmoji = screen.getAllByText("Click to copy emoji") 
    userEvent.click(copyEmoji)
    const input = screen.getByPlaceholderText("Search...")
    userEvent.paste(input, copyEmoji)
    expect(input.length > 0)
  })

})