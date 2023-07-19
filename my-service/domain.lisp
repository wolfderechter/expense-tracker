(in-package :mu-cl-resources)

(define-resource expense ()
  :class (s-prefix "schema:Expense")
  :properties `((:title :string ,(s-prefix "schema:title"))
                (:category :string ,(s-prefix "schema:category"))
                (:value :number ,(s-prefix "schema:value"))
                (:date :date ,(s-prefix "schema:date")))
  ;; what does this mean? Necessary?
  :resource-base (s-url "http://mu.semte.ch/services/github/madnificent/book-service/books/")
  :on-path "expenses")
