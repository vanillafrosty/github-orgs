class Api::OrganizationsController < ApplicationController

  def index
    org = params[:org]
    repos = JSON.parse(RestClient.get("https://api.github.com/orgs/#{org}/repos"))
    #filter the data
    out = []
    repos.each do |repo|
      filteredRepo = {
        name: repo["name"],
        full_name: repo["full_name"],
        forks_count: repo["forks_count"],
        stargazers_count: repo["stargazers_count"]
      }
      out.push(filteredRepo)
    end
    render json: out

  end



end
