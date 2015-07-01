require 'sinatra'
require 'quickpay/api/client'

helpers do
  def quickpay
    foo ||= Quickpay::API::Client.new(api_key: ENV['QUICKPAY_API_KEY'])
  end
end

get "/" do
  client  = Quickpay::Client.new(":#{ENV['QUICKPAY_API_KEY']}")
  payment = client.post("/payments",
    :order_id => "0001",
    :currency => "DKK"
  )
  payment_link = client.post("/payments/#{payment.id}/link",
    :amount => 100
  )

  erb :index
end

post "/callback" do
end

__END__

@@ layout
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="QuickPay Techincal Documentation">

    <title>QuickPay Technical Documentation</title>
  </head>
  <body>
    <%= yield %>
  </body>
</html>


@@ index
<a href="#">HER</a>