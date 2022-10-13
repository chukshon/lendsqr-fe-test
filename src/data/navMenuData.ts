import user_icon from "../Assets/menu_icons/users.svg"
import guarantors from "../Assets/menu_icons/guarantors.svg"
import audit_log from "../Assets/menu_icons/audit_log.svg"
import decision_model from "../Assets/menu_icons/decision_model.svg"
import fees_charge from "../Assets/menu_icons/fees_charge.svg"
import fees_pricing from "../Assets/menu_icons/fees_pricing.svg"
import karma from "../Assets/menu_icons/karma.svg"
import loan_products from "../Assets/menu_icons/loan_products.svg"
import loan_requests from "../Assets/menu_icons/loan_requests.svg"
import loan from "../Assets/menu_icons/loan.svg"
import organization from "../Assets/menu_icons/organization.svg"
import preferences from "../Assets/menu_icons/preferences.svg"
import reports from "../Assets/menu_icons/reports.svg"
import saving_products from "../Assets/menu_icons/saving_products.svg"
import savings from "../Assets/menu_icons/savings.svg"
import service_account from "../Assets/menu_icons/service_account.svg"
import services from "../Assets/menu_icons/services.svg"
import settlement from "../Assets/menu_icons/settlement.svg"
import transactions from "../Assets/menu_icons/transactions.svg"
import whitelist from "../Assets/menu_icons/whitelist.svg"

export const menu = [
  {
    title: "CUSTOMERS",
    subMenu: [
      { title: "Users", link: "users", icon: user_icon },
      { title: "Guarantors", link: "/**", icon: guarantors },
      { title: "Loans", link: "/**", icon: loan },
      { title: "Decision Models", link: "/**", icon: decision_model },
      { title: "Savings", link: "/**", icon: savings },
      { title: "Loan Requests", link: "/**", icon: loan_requests },
      { title: "Whitelist", link: "/**", icon: whitelist },
      { title: "Karma", link: "/**", icon: karma },
    ],
  },
  {
    title: "BUSINESS",
    subMenu: [
      { title: "Organization", link: "/**", icon: organization },
      { title: "Loan Products", link: "/**", icon: loan_products },
      { title: "Saving Products", link: "/**", icon: saving_products },
      { title: "Fees and Charges", link: "/**", icon: fees_charge },
      { title: "Transactions", link: "/**", icon: transactions },
      { title: "Services", link: "/**", icon: services },
      { title: "Service Account", link: "/**", icon: service_account },
      { title: "Settlements", link: "/**", icon: settlement },
      { title: "Reports", link: "/**", icon: reports },
    ],
  },
  {
    title: "SETTINGS",
    subMenu: [
      { title: "Preferences", link: "/**", icon: preferences },
      { title: "Fees and Pricing", link: "/**", icon: fees_pricing },
      { title: "Audit Logs", link: "/**", icon: audit_log },
    ],
  },
]
