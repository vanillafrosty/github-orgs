class Api::OrganizationsController < ApplicationController

  def index
    org = params[:org]
    repos = JSON.parse(RestClient.get("https://api.github.com/orgs/#{org}/repos"))
    #filter the data
    out = []
    @public_contributors = {}
    @private_contributors = {}
    repos.each do |repo|
      contributors = JSON.parse(RestClient.get("https://api.github.com/repos/appacademy/#{repo["name"]}/contributors"))
      parse_contributors(contributors, @public_contributors, @private_contributors)
      filteredRepo = {
        name: repo["name"],
        full_name: repo["full_name"],
        forks_count: repo["forks_count"],
        stargazers_count: repo["stargazers_count"],
        contributors_count: contributors.length
      }
      out.push(filteredRepo)

    end
    render json: out
  end

  def parse_contributors(contributors, public_contributors, private_contributors)
    debugger
    contributors.each do |contributor|
      username = contributor["login"]
      begin
        JSON.parse(RestClient.get("https://api.github.com/orgs/appacademy/public_members/#{username}"))
      rescue
        if public_contributors[username]
          public_contributors[username] += contributor["contributions"]
        else
          public_contributors[username] = contributor["contributions"]
        end
      else
        if private_contributors[username]
          private_contributors[username] += contributor["contributions"]
        else
          private_contributors[username] = contributor["contributions"]
        end
      end
    end
  end



end
