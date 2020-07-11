import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Text } from '../../typography'
import { useTheme } from '../../theme'

const Textarea = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()
    const {
      className,
      width,
      height,
      disabled,
      required,
      isInvalid,
      appearance,
      placeholder,
      spellCheck,
      grammarly,
      ...restProps
    } = props
    const themedClassName = theme.getTextareaClassName(appearance)

    return (
      <Text
        is="textarea"
        ref={ref}
        className={cx(themedClassName, className)}
        size={400}
        width={width}
        height={height}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        paddingLeft={Math.round(height / 3.2)}
        paddingRight={Math.round(height / 3.2)}
        borderRadius={3}
        spellCheck={spellCheck}
        aria-invalid={isInvalid}
        data-gramm_editor={grammarly}
        {...(disabled ? { color: 'muted' } : {})}
        {...Textarea.styles}
        {...restProps}
      />
    )
  })
)

Textarea.propTypes = {
  /**
   * Composes the Text component as the base.
   */
  ...Text.propTypes,

  /**
   * Makes the textarea element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: PropTypes.bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * The appearance of the TextInput.
   */
  appearance: PropTypes.string,

  /**
   * The width of the TextInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

// TODO fix these (since defaultProps dont seem to work with memo + forwardRef)
Textarea.defaultProps = {
  appearance: 'default',
  width: '100%',
  disabled: false,
  isInvalid: false,
  spellCheck: true,
  grammarly: false
}

Textarea.styles = {
  minHeight: 80,
  paddingX: 10,
  paddingY: 8
}

export default Textarea
