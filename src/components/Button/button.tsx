import React from 'react';
import classNames from 'classnames';

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps{
  className?: string;// 用户自定义的class
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// 合并类型
// button的属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
// a链接的属性
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

// 使用Partial设置属性可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props)=>{
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props;
  
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })

  if (btnType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;