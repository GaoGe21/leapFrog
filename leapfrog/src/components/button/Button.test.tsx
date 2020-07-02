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
describe("button组件单元测试", () => {
    it("正常渲染button标签， 默认公共class为btn，disabled为false", () => {
        const wrapper = render(<Button>ok</Button>)
        const element = wrapper.getByText("ok") as HTMLButtonElement
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual("BUTTON")
        expect(element).toHaveClass("btn")
        expect(element.disabled).toBeFalsy()
    })
    it("default类型正常渲染，class为btn-default，点击时调用onClick", () => {
        const wrapper = render(<Button {...defaultProps}>default</Button>)
        const element = wrapper.getByText("default")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-default")
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()

    })
    it("primary&large类型正常渲染，class为btn-primary btn-large klass", () => {
        const wrapper = render(<Button {...primaryLargeProps}>primary</Button>)
        const element = wrapper.getByText("primary")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-primary btn-large klass")
    })
    it("danger&small类型正常渲染，class为btn-danger btn-small", () => {
        const wrapper = render(<Button {...dangerProps}>danger</Button>)
        const element = wrapper.getByText("danger")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-danger btn-small")
    })
    it("link类型正常渲染A标签，class为btn-link，点击时调用onClick", () => {
        const wrapper = render(<Button {...linkProps}>link</Button>)
        const element = wrapper.getByText("link")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass("btn-link")
        expect(element.tagName).toEqual("A")
        fireEvent.click(element)
        expect(linkProps.onClick).toHaveBeenCalled()
    })
    it("disabled为true时灰显，点击时调用onClick", () => {
        const wrapper = render(<Button {...disabledProps}>disabled</Button>)
        const element = wrapper.getByText("disabled") as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})