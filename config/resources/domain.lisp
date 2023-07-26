(in-package :mu-cl-resources)

(define-resource expense ()
  :class (s-prefix "schema:Expense")
  :properties `((:title :string ,(s-prefix "schema:title"))
                (:value :number ,(s-prefix "schema:value"))
                (:date :date ,(s-prefix "schema:date")))
  :has-one `((category :via ,(s-prefix "schema:category")
                      :as "category"))
  :resource-base (s-url "http://mu.semte.ch/application/expense-tracker/expenses/")
  :on-path "expenses")

(define-resource category ()
  :class (s-prefix "schema:Category")
  :properties `((:title :string ,(s-prefix "schema:title")))
  :has-many `((expense :via ,(s-prefix "schema:category")
                        :inverse t
                        :as "expenses"))
  :resource-base (s-url "http://mu.semte.ch/application/expense-tracker/categories/")
  :on-path "categories")

;; (read-domain-file "master-account-domain.lisp")
