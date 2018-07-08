@repos.each do |repo|
  json.set! repo.id do
    json.extract! repo, :id, :name, :full_name, :forks_count, :stargazers_count
  end
end
