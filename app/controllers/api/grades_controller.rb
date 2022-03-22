class Api::GradesController < ApplicationController
    
    def all_and_then_some
        render json: Grade.all_and_then_some
    end

    def index
        render json: Grade.all
    end

    def create
      grade = Grade.new(grade_params)
      if(grade.save)
        render json: grade
      else
        render json: {error: grade.errors.full_messages}, status: 422
      end
    end

    def update
        grade = Grade.find(params[:id])
        if(grade.update(grade_params_only_score))
          render json: grade
        else
          render json: {error: grade.errors.full_messages}, status: 422
        end
    end
    
    def show
        grade = Grade.find(params[:id])
        render json: grade
    end

    def destroy
        grade = Grade.find(params[:id])
        render json: grade.destroy
    end

    #Don't need for demo
    def create_with_user
        user = User.find(params[:id])
        grade = user.grades.new(grade_params)
        if(grade.save)
          render json: grade
        else
          render json: {error: grade.errors.full_messages}, status: 422
        end
      end

    #Don't need for demo
    def create_with_skill
        skill = Skill.find(params[:id])
        grade = skill.grades.new(grade_params)
        if(grade.save)
          render json: grade
        else
          render json: {error: grade.errors.full_messages}, status: 422
        end
    end  

    private 

    def grade_params
        params.require(:grade).permit(:score,:user_id, :skill_id)
    end

    def grade_params_only_score
        params.require(:grade).permit(:score)
    end

end
