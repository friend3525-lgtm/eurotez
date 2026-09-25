/* @ds-bundle: {"format":4,"namespace":"EurotezDesignSystem_248040","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Tag","sourcePath":"components/surfaces/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"713b570d9e7c","components/core/IconButton.jsx":"6067c11f3e8e","components/feedback/Dialog.jsx":"947f5643f9c4","components/feedback/Toast.jsx":"5eb70b7226aa","components/feedback/Tooltip.jsx":"4f5b7ee47931","components/forms/Checkbox.jsx":"488a3d29e53c","components/forms/Input.jsx":"b4d14a9614fc","components/forms/Radio.jsx":"ae01e9c13710","components/forms/Select.jsx":"0825af45a76c","components/forms/Switch.jsx":"c8af0e070b41","components/navigation/Tabs.jsx":"84060635cfce","components/surfaces/Badge.jsx":"6d40474708a4","components/surfaces/Card.jsx":"d5f8c24114a2","components/surfaces/Tag.jsx":"8d186b5f4382","ui_kits/website/Footer.jsx":"221e4be4f764","ui_kits/website/Header.jsx":"fcdb2c006fee","ui_kits/website/Hero.jsx":"b57cf9401054","ui_kits/website/Philosophy.jsx":"eb4cbc74953c","ui_kits/website/ProductCard.jsx":"8aa9f3de8ef8","ui_kits/website/ProductGrid.jsx":"9c51846fab4a","ui_kits/website/copy.jsx":"b4278f4091a1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EurotezDesignSystem_248040 = window.EurotezDesignSystem_248040 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeStyles = {
  s: {
    padding: "8px 18px",
    fontSize: "var(--text-body-s)"
  },
  m: {
    padding: "12px 28px",
    fontSize: "var(--text-body)"
  },
  l: {
    padding: "16px 36px",
    fontSize: "var(--text-body-l)"
  }
};
const variantStyles = {
  primary: {
    background: "var(--color-accent)",
    color: "var(--color-accent-contrast)",
    border: "1px solid var(--color-accent)"
  },
  secondary: {
    background: "transparent",
    color: "var(--color-text)",
    border: "1px solid var(--color-text)"
  },
  ghost: {
    background: "transparent",
    color: "var(--color-text)",
    border: "1px solid transparent"
  }
};
function Button({
  children,
  variant = "primary",
  size = "m",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeStyles[size] || sizeStyles.m;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      borderRadius: "var(--radius-s)",
      transition: "background var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)",
      ...v,
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  size = 40,
  variant = "ghost",
  onClick,
  style,
  ...rest
}) {
  const filled = variant === "filled";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: filled ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
      background: filled ? "var(--color-accent)" : "transparent",
      color: filled ? "var(--color-accent-contrast)" : "var(--color-text)",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(61,55,47,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-l)",
      boxShadow: "var(--shadow-raised)",
      padding: "var(--space-7)",
      maxWidth: 440,
      width: "90%",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-heading)",
      color: "var(--color-text)",
      marginBottom: "var(--space-4)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-text)",
      fontSize: "var(--text-body)",
      lineHeight: "var(--leading-normal)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toneStyles = {
  default: {
    background: "var(--ink-900)",
    color: "var(--sand-50)"
  },
  success: {
    background: "var(--color-success)",
    color: "var(--sand-50)"
  },
  error: {
    background: "var(--color-error)",
    color: "var(--sand-50)"
  }
};
function Toast({
  children,
  tone = "default",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-s)",
      padding: "12px 20px",
      borderRadius: "var(--radius-m)",
      boxShadow: "var(--shadow-raised)",
      ...toneStyles[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  style
}) {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--ink-900)",
      color: "var(--sand-50)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      padding: "6px 10px",
      borderRadius: "var(--radius-s)",
      whiteSpace: "nowrap",
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--color-text)",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 18,
      height: 18,
      border: `1px solid ${checked ? "var(--color-accent)" : "var(--color-border)"}`,
      background: checked ? "var(--color-accent)" : "transparent",
      borderRadius: "var(--radius-s)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5L4 7.5L10 1",
    stroke: "var(--color-accent-contrast)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  type = "text",
  value,
  defaultValue,
  onChange,
  error,
  style
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--color-text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--color-text)",
      background: "var(--color-surface)",
      border: `1px solid ${error ? "var(--color-error)" : focused ? "var(--color-accent)" : "var(--color-border)"}`,
      borderRadius: "var(--radius-s)",
      padding: "12px 16px",
      outline: "none",
      boxShadow: focused ? "var(--shadow-focus)" : "none",
      transition: "border var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--color-error)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--color-text)",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange({
      target: {
        checked: true
      }
    }),
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      border: `1px solid ${checked ? "var(--color-accent)" : "var(--color-border)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--color-accent)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--color-text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--color-text)",
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-s)",
      padding: "12px 16px",
      outline: "none",
      appearance: "none"
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--color-text)",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 40,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--color-accent)" : "var(--ink-100)",
      position: "relative",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--color-surface)",
      transition: "left var(--duration-fast) var(--ease-standard)",
      boxShadow: "var(--shadow-card)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  defaultIndex = 0,
  style
}) {
  const [active, setActive] = useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--color-border)"
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    onClick: () => setActive(i),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "12px 0",
      fontSize: "var(--text-body-s)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: i === active ? "var(--color-text)" : "var(--color-text-muted)",
      borderBottom: i === active ? "2px solid var(--color-accent)" : "2px solid transparent",
      marginBottom: -1,
      transition: "color var(--duration-fast) var(--ease-standard)"
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5) 0"
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
const toneStyles = {
  neutral: {
    background: "var(--sand-200)",
    color: "var(--color-text)"
  },
  accent: {
    background: "var(--color-accent)",
    color: "var(--color-accent-contrast)"
  },
  outline: {
    background: "transparent",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)"
  }
};
function Badge({
  children,
  tone = "neutral",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      ...toneStyles[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  padded = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-l)",
      boxShadow: "var(--shadow-card)",
      padding: padded ? "var(--space-6)" : 0,
      overflow: "hidden",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-s)",
      color: "var(--color-text)",
      background: "var(--color-surface-alt)",
      border: "1px solid var(--color-border)",
      padding: "6px 12px",
      borderRadius: "var(--radius-s)",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      cursor: "pointer",
      color: "var(--color-text-muted)"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer({
  t,
  onSubscribe
}) {
  const [email, setEmail] = React.useState("");
  const head = {
    color: "var(--sand-300)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-wide)",
    marginBottom: 4
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--brand-cocoa)",
      color: "var(--white)",
      fontFamily: "var(--font-body)",
      padding: "64px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 32,
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/eurotez-logo-stacked-white.png",
    alt: "Eurotez Skincare",
    style: {
      width: 130,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--sand-300)",
      lineHeight: "var(--leading-normal)",
      maxWidth: 240
    }
  }, t.footerTagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, t.shop), t.shopLinks.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, t.company), t.companyLinks.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sand-300)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      fontSize: 13
    }
  }, t.newsletter), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginTop: 12,
      borderBottom: "1px solid var(--sand-600)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: t.emailPlaceholder,
    style: {
      background: "none",
      border: "none",
      color: "var(--white)",
      padding: "8px 0",
      fontSize: 13,
      flex: 1,
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSubscribe(email),
    style: {
      background: "none",
      border: "none",
      color: "var(--brand-tan)",
      cursor: "pointer",
      fontSize: 13,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase"
    }
  }, t.join)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 12,
      color: "var(--sand-300)",
      marginTop: 48
    }
  }, "\xA9 2026 Eurotez LLC."));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function Header({
  t,
  lang,
  onLang,
  onOpenCart
}) {
  const link = {
    cursor: "pointer",
    color: "var(--color-text)"
  };
  const pill = on => ({
    cursor: "pointer",
    fontSize: 11,
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: "var(--radius-pill)",
    background: on ? "var(--color-accent)" : "transparent",
    color: on ? "#fff" : "var(--sand-700)",
    border: on ? "1px solid var(--color-accent)" : "1px solid var(--color-border)"
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 48px",
      borderBottom: "1px solid var(--color-border)",
      background: "var(--color-bg)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/eurotez-logo-horizontal.png",
    alt: "Eurotez Skincare",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 40,
      alignItems: "center",
      fontSize: 14,
      color: "var(--color-text)"
    }
  }, t.nav.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: link
  }, n)), /*#__PURE__*/React.createElement("span", {
    onClick: onOpenCart,
    style: {
      ...link,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      fontSize: 12
    }
  }, t.cart), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onLang("es"),
    style: pill(lang === "es")
  }, "ES"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onLang("en"),
    style: pill(lang === "en")
  }, "EN"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      background: "var(--brand-cocoa)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "112px 64px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-xl)",
      textTransform: "uppercase",
      color: "var(--white)",
      lineHeight: "var(--leading-tight)",
      margin: 0,
      fontWeight: "var(--weight-display)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, t.heroTitle[0], /*#__PURE__*/React.createElement("br", null), t.heroTitle[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--brand-cream)",
      maxWidth: 400,
      lineHeight: "var(--leading-normal)",
      margin: 0
    }
  }, t.heroBody), /*#__PURE__*/React.createElement("button", {
    style: {
      alignSelf: "flex-start",
      background: "var(--brand-cream)",
      color: "var(--brand-cocoa)",
      border: "none",
      padding: "14px 32px",
      borderRadius: "var(--radius-s)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: "var(--weight-medium)",
      cursor: "pointer"
    }
  }, t.cta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 3,
      background: "var(--white)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 3,
      background: "rgba(255,255,255,.4)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 3,
      background: "rgba(255,255,255,.4)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sand-300)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/eurotez-isotipo.png",
    alt: "",
    style: {
      height: 160,
      opacity: 0.45
    }
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Philosophy.jsx
try { (() => {
function Philosophy({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      background: "var(--sand-200)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      background: "var(--sand-400)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--ink-700)"
    }
  }, t.phEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-display-m)",
      color: "var(--color-text)",
      margin: "12px 0 20px",
      lineHeight: "var(--leading-tight)"
    }
  }, t.phTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--color-text)",
      lineHeight: "var(--leading-normal)"
    }
  }, t.phBody)));
}
window.Philosophy = Philosophy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Philosophy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  description,
  price,
  badge,
  addLabel,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-l)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)",
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      background: "var(--sand-200)",
      position: "relative"
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      background: "var(--color-accent)",
      color: "#fff",
      fontSize: 11,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)"
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: 20,
      color: "var(--color-text)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--color-text-muted)",
      lineHeight: "var(--leading-normal)",
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: "var(--color-text)"
    }
  }, price), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    style: {
      background: "transparent",
      border: "1px solid var(--color-text)",
      color: "var(--color-text)",
      padding: "8px 18px",
      borderRadius: "var(--radius-s)",
      fontSize: 12,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, addLabel))));
}
window.ProductCard = ProductCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductGrid({
  t,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 48px",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--sand-600)"
    }
  }, t.gridEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-display-m)",
      color: "var(--color-text)",
      margin: "8px 0 0"
    }
  }, t.gridTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32,
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, t.products.map(p => /*#__PURE__*/React.createElement(window.ProductCard, _extends({
    key: p.name
  }, p, {
    addLabel: t.add,
    onAdd: () => onAdd(p.name)
  })))));
}
window.ProductGrid = ProductGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/copy.jsx
try { (() => {
window.EurotezCopy = {
  es: {
    nav: ["Inicio", "La crema", "Ingredientes", "Contacto"],
    cart: "Carrito",
    heroTitle: ["Despierta con la piel", "hidratada y cuidada."],
    heroBody: "Una crema de noche enfocada para piel seca o de apariencia deshidratada. Cuidado pensado, expectativas honestas y un paso práctico después de limpiar.",
    cta: "Descubre la crema de noche",
    gridEyebrow: "Formatos",
    gridTitle: "La crema Eurotez",
    add: "Añadir",
    products: [{
      name: "30 ml",
      description: "Para empezar el ritual.",
      price: "$54"
    }, {
      name: "50 ml",
      description: "El formato de todos los días.",
      price: "$78",
      badge: "Más elegido"
    }, {
      name: "Dúo 2 × 50 ml",
      description: "Tu ritual de noche, todo el año.",
      price: "$140"
    }],
    phEyebrow: "Nuestra filosofía",
    phTitle: "Cada producto debe ganarse su lugar.",
    phBody: "No creemos en añadir pasos solo para añadir productos. Nuestro estándar es simple: un producto debe tener una función clara, una clienta clara y una razón para pertenecer a la rutina.",
    footerTagline: "Lo suficientemente simple para usar. Lo suficientemente pensado para confiar.",
    shop: "Tienda",
    shopLinks: ["La crema", "Formatos", "Envíos"],
    company: "Compañía",
    companyLinks: ["Filosofía", "Ingredientes", "Contacto"],
    newsletter: "Newsletter",
    join: "Unirme",
    emailPlaceholder: "tu@email.com",
    toastCart: "Tu carrito está vacío",
    toastAdded: n => n + " añadido al carrito",
    toastJoined: "Te has unido a la lista",
    toastInvalid: "Ingresa un correo válido"
  },
  en: {
    nav: ["Home", "The cream", "Ingredients", "Contact"],
    cart: "Cart",
    heroTitle: ["Wake up to skin that", "looks cared for."],
    heroBody: "One focused night cream for dry, dehydrated-looking skin. Thoughtful care, honest expectations, and one practical step after cleansing.",
    cta: "Discover the Night Cream",
    gridEyebrow: "Sizes",
    gridTitle: "The Eurotez cream",
    add: "Add",
    products: [{
      name: "30 ml",
      description: "To begin the ritual.",
      price: "$54"
    }, {
      name: "50 ml",
      description: "The everyday size.",
      price: "$78",
      badge: "Most chosen"
    }, {
      name: "Duo 2 × 50 ml",
      description: "Your night ritual, all year.",
      price: "$140"
    }],
    phEyebrow: "Our philosophy",
    phTitle: "Every product should earn its place.",
    phBody: "We do not believe in adding steps simply to add products. Our standard is simple: a product should have a clear job, a clear customer, and a reason to belong in the routine.",
    footerTagline: "Simple enough to use. Thoughtful enough to trust.",
    shop: "Shop",
    shopLinks: ["The cream", "Sizes", "Shipping"],
    company: "Company",
    companyLinks: ["Philosophy", "Ingredients", "Contact"],
    newsletter: "Newsletter",
    join: "Join",
    emailPlaceholder: "you@email.com",
    toastCart: "Your cart is empty",
    toastAdded: n => n + " added to cart",
    toastJoined: "You're on the list",
    toastInvalid: "Enter a valid email"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/copy.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

})();
