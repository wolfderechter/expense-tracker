defmodule Dispatcher do
  use Matcher
  define_accept_types [
    html: [ "text/html", "application/xhtml html" ],
    json: [ "application/json", "application/vnd.api json" ]
  ]

  @any %{}
  @json %{ accept: %{ json: true } }
  @html %{ accept: %{ html: true } }

  # In order to forward the 'themes' resource to the
  # resource service, use the following forward rule:
  #
  # match "/themes/*path", @json do
  #   Proxy.forward conn, path, "http://resource/themes/"
  # end

  match "/expenses/*path" do
     Proxy.forward conn, path, "http://expenseservice/expenses/"
   end


  # authentication
  # post "/accounts/*path" do
  #   Proxy.forward conn, path, "http://authentication/accounts/"
  # end

  # delete "/accounts/current/*path" do
  #   Proxy.forward conn, path, "http://authentication/accounts/current/"
  # end

  # patch "/accounts/current/changePassword/*path" do
  #   Proxy.forward conn, path, "http://authentication/accounts/current/changePassword/"
  # end

  # match "/sessions/*path" do
  #   Proxy.forward conn, path, "http://authentication/sessions/"
  # end


  #
  # Run `docker-compose restart dispatcher` after updating
  # this file.

  match "/*_", %{ last_call: true } do
    send_resp( conn, 404, "Route not found.  See config/dispatcher.ex" )
  end
end
