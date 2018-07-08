class Api::OrganizationsController < ApplicationController

  def index
    org = params[:org]
    @repos = JSON.parse(RestClient.get("https://api.github.com/orgs/#{org}/repos"))
    render json: @repos

  end



end
