class GreetingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :greeting
end
