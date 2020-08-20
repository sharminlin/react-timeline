import React from 'react'

interface Props {
  /**
   * logo地址
   */
  logo: string,
  className?: string,
  alt?: string
}

export const Logo: React.SFC<Props> = props => {
  const { logo, className, alt } = props
  return (
    <img className={className} src={logo} alt={alt} />
  )
}