import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  completion: {
    type: Date,
    required: 'Completion date is required'
  },
  description: {
    type: String,
    trim: true,
    required: 'Description is required'
  }
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
