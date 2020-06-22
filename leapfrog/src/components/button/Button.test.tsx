import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps, ButtonSize, ButtonType } from "./Button"

const defaultProps = {
    onClick: jest.fn()
}

const primaryLargeProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const dangerProps: ButtonProps = {
    btnType: ButtonType.Danger,
    size: ButtonSize.Small,
}

const linkProps: ButtonProps = {
    btnType: ButtonType.Link,
    href: "http://baidu.com",
    onClick: jest.fn()
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}
describe("case: button component", () => {
    it("test button component common setting", () => {
        const wrapper = render(<Button>ok</Button>)
        const element = wrapper.getByText("ok") as HTMLButtonElement
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual("BUTTON")
        expect(element).toHaveClass("btn")
        expect(element.disabled).toBeFalsy()
    })
    it("test default button case", () => {
        const wrapper = render(<Button {...defaultProps}>default</Button>)
        const element = wrapper.getByText("default")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-default")
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()

    })
    it("test primary Large button case", () => {
        const wrapper = render(<Button {...primaryLargeProps}>primary</Button>)
        const element = wrapper.getByText("primary")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-primary btn-large klass")
    })
    it("test danger Small button case", () => {
        const wrapper = render(<Button {...dangerProps}>danger</Button>)
        const element = wrapper.getByText("danger")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-danger btn-small")
    })
    it("test link button case", () => {
        const wrapper = render(<Button {...linkProps}>link</Button>)
        const element = wrapper.getByText("link")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-link")
        expect(element.tagName).toEqual("A")
        fireEvent.click(element)
        expect(linkProps.onClick).toHaveBeenCalled()
    })
    it("test should render disabled button when disabled is true", () => {
        const wrapper = render(<Button {...disabledProps}>disabled</Button>)
        const element = wrapper.getByText("disabled") as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})