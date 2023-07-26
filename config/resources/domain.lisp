(in-package :mu-cl-resources)

(define-resource expense ()
  :class (s-prefix "schema:Expense")
  :properties `((:title :string ,(s-prefix "schema:title"))
                (:category :string ,(s-prefix "schema:category"))
                (:value :number ,(s-prefix "schema:value"))
                (:date :date ,(s-prefix "schema:date")))
  ;; what does this mean? Necessary?
  :resource-base (s-url "http://mu.semte.ch/application/expense-tracker/expenses/")
  :on-path "expenses")

;; (read-domain-file "master-account-domain.lisp")
