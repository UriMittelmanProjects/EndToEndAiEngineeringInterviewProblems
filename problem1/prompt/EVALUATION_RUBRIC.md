# Evaluation Rubric - Product Catalog Dashboard

## Overview
Time Limit: 45-60 minutes
Total Points: 100

## Scoring Breakdown

### 1. Component Design (30 points)

#### Excellent (25-30 points)
- Clear separation of concerns with multiple reusable components (ProductCard, SearchBar, CategoryFilter, etc.)
- Proper component hierarchy and composition
- Well-organized file structure
- Components are modular and reusable
- Clean props interface

#### Good (18-24 points)
- Some component separation, but could be improved
- Basic component structure present
- Most components are reasonably organized
- Minor issues with reusability

#### Needs Improvement (10-17 points)
- Limited component separation
- Most logic in a single component
- Poor component organization
- Difficult to maintain or extend

#### Poor (0-9 points)
- Everything in one component
- No clear structure
- Spaghetti code

### 2. State Management (25 points)

#### Excellent (21-25 points)
- Appropriate use of useState and useEffect
- Efficient state updates (no unnecessary re-renders)
- Proper handling of loading states
- Good error handling with user feedback
- Clean async/await or promise handling
- Proper cleanup in useEffect if needed

#### Good (15-20 points)
- Correct use of hooks
- Basic loading and error states
- Some room for optimization
- Minor state management issues

#### Needs Improvement (8-14 points)
- Inefficient state management
- Missing loading or error states
- Improper hook usage
- State updates cause unnecessary re-renders

#### Poor (0-7 points)
- Incorrect hook usage
- No error handling
- Broken state management
- Application crashes or behaves unexpectedly

### 3. UI/UX Quality (25 points)

#### Excellent (21-25 points)
- Beautiful, polished interface
- Fully responsive (mobile, tablet, desktop)
- Excellent loading states (spinners, skeletons)
- Clear error messages
- Intuitive filters and search
- Good visual hierarchy and spacing
- Smooth user experience

#### Good (15-20 points)
- Clean, functional interface
- Mostly responsive
- Basic loading states
- Functional filters and search
- Minor UI/UX issues

#### Needs Improvement (8-14 points)
- Basic styling present
- Limited responsiveness
- Poor loading/error feedback
- Confusing interface elements

#### Poor (0-7 points)
- Minimal or no styling
- Not responsive
- No loading states
- Difficult to use

### 4. AI Tool Usage & Code Quality (20 points)

#### Excellent (17-20 points)
- Demonstrates effective prompting strategies
- AI-generated code is well-integrated
- Shows understanding of generated code
- Made appropriate customizations
- Code is clean and follows best practices
- Good variable/function naming
- Proper formatting

#### Good (12-16 points)
- Used AI tools effectively
- Generally understands the code
- Some customization present
- Code is reasonably clean
- Minor issues with integration

#### Needs Improvement (6-11 points)
- Limited AI tool effectiveness
- Code appears copied without understanding
- Poor integration between components
- Code quality issues

#### Poor (0-5 points)
- Ineffective use of AI tools
- Code doesn't work
- No evidence of understanding
- Poor code quality

## Functional Requirements Checklist

These are **must-haves**. Missing any of these significantly impacts the score:

- [ ] Application runs without errors (`npm run dev` works)
- [ ] Products are fetched and displayed from the API
- [ ] Category filtering works
- [ ] Search functionality works
- [ ] Product cards show: image, name, price
- [ ] Basic responsive design present

## Bonus Points (up to +10)

- [ ] Sort functionality (+3 points)
- [ ] Product detail view/modal (+3 points)
- [ ] Animations/transitions (+2 points)
- [ ] TypeScript implementation (+2 points)
- [ ] Unit tests (+3 points)
- [ ] Advanced features (pagination, favorites, etc.) (+2 points)

## Red Flags (Deductions)

- Application doesn't run: -30 points
- Missing core functionality (no filters OR no search): -15 points each
- Not responsive at all: -10 points
- No error/loading states: -5 points
- Extremely poor code quality: -10 points

## Notes for Evaluators

### What to Look For

1. **Prompting Evidence**:
   - Ask candidate to describe their prompting strategy
   - Look for iterations and refinements
   - Check if they combined multiple AI outputs coherently

2. **Code Understanding**:
   - Ask candidate to explain key parts of their code
   - Check if they can modify/extend functionality
   - Verify they understand React concepts used

3. **Problem-Solving**:
   - How did they handle challenges?
   - Did they debug effectively?
   - How did they integrate different pieces?

### Interview Discussion Points

After reviewing the code, discuss:
- "Walk me through your component structure"
- "How did you approach the filtering logic?"
- "What prompts did you use with the AI tool?"
- "How would you add [new feature]?"
- "What would you improve given more time?"

## Final Score Calculation

| Score Range | Grade | Assessment |
|-------------|-------|------------|
| 90-100+ | A | Excellent - Strong hire |
| 80-89 | B | Good - Hire |
| 70-79 | C | Acceptable - Consider |
| 60-69 | D | Needs improvement - Likely no |
| Below 60 | F | Poor - No hire |
